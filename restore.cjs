const fs = require('fs');
const path = require('path');
const readline = require('readline');

async function processTranscript() {
  const fileStream = fs.createReadStream('C:\\Users\\DELL\\.gemini\\antigravity-ide\\brain\\eaa9ce8a-a61c-4139-9382-f5f48f19cddd\\.system_generated\\logs\\transcript_full.jsonl');
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
  
  const filesFound = {};
  
  for await (const line of rl) {
    if (line.includes('"name":"write_to_file"') || line.includes('"name":"replace_file_content"')) {
      try {
        const entry = JSON.parse(line);
        if (entry.tool_calls) {
          for (const call of entry.tool_calls) {
            if (call.name === 'write_to_file' && call.args && call.args.TargetFile && call.args.CodeContent) {
              const target = call.args.TargetFile.replace(/\\/g, '/');
              // The original files were created before step 700.
              // We'll keep updating the filesFound until step 700 to catch any immediate fixes made after creation.
              if (entry.step_index < 700) {
                 filesFound[target] = call.args.CodeContent;
              }
            }
          }
        }
      } catch(e) {}
    }
  }
  
  for (const [filepath, content] of Object.entries(filesFound)) {
    if (filepath.includes('src/components/') || filepath.includes('src/pages/') || filepath.includes('src/App.')) {
      if (!filepath.includes('Hero.jsx') && !filepath.includes('Hero.css')) {
        try {
          fs.writeFileSync(filepath, content);
          console.log('Restored:', filepath);
        } catch(err) {
          console.log('Failed to write:', filepath);
        }
      }
    }
  }
}

processTranscript();

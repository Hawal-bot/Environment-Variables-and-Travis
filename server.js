export PRINT_VALUE=ultron


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

const aliasName = process.env.PRINT_VALUE;
console.log(`My Alias name is ${aliasName}`);

main();

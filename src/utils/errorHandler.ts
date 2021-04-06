import chalk from 'chalk';

const errorHandler = (err: any) => {
  if (typeof err === 'object') {
    if (err.message) {
      console.log(chalk.red('\nMessage: ') + err.message);
    }
    if (err.stack) {
      console.log('\nStacktrace:');
      console.log('====================');
      console.log(err.stack);
    }
  } else {
    console.log('dumpError :: argument is not an object');
    console.log(chalk.yellow('Aborting...'));
    process.exit();
  }
  console.log(chalk.yellow('Aborting...'));
  process.exit();
};

export default errorHandler;

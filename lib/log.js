module.exports = function (content) {

  if (typeof content === 'string') {
    console.log(content+ '\n...');
  } else {
    console.log(content)
    console.log('...')
  }

}
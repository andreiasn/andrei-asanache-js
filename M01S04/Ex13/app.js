var globalVariable = 'Ma aflu in contextul global';

if (true) {
  var localVariable = 'Ma aflu in contextul local';
  var globalVariable = 'Nu ma aflu in contextul local';

  console.log(globalVariable);
  console.log(localVariable);
}

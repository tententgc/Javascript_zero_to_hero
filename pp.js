i=0
async function spawn () {
  for(;;) {
    await require('axios').get('http://35.192.172.105:8080/')
    i++
    console.log('sent',i,'requests')
  }
}
for (i = 0; i<100;i++)spawn()
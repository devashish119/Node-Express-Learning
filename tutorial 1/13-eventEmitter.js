const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('response',(name, id)=>{
    console.log(`data response- name : ${name} and id: ${id}`);
});

customEvent.emit('response','john',34);
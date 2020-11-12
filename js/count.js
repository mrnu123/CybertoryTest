(()=>{
    // let start=new Date().getTime();
    let time=-1;
    function setElementInnerText(id,text){
        const element=document.getElementById(id);
        element.innerText=text;
    }

    function count(){
        time=time+1;
        setElementInnerText('clients',time);
        setElementInnerText('project',time);
        setElementInnerText('awards',time);
        setElementInnerText('team',time);
    }
    function run(){
        count();
        setInterval(count,1000);
    }
    run();
})();
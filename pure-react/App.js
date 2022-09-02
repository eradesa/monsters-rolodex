const Person = props =>{
    return React.createElement('div',{key:'person-ele'}, [
        React.createElement('h1',{key:'name-ele'},props.name),
        React.createElement('p',{key:'occu-ele'},props.occupation)
    ])
};

const App = ()=>{
    return React.createElement('div',{},[
        React.createElement('h1',{key:'hj-ele', className:'title'},'React is reandered'),
        React.createElement (Person,{key:'perName1-ele',name:'Eranga',occupation:'Banker'},null),
        React.createElement (Person,{key:'pperName2-ele',name:'Eranga1',occupation:'Banker1'},null),
        React.createElement (Person,{key:'perName3-ele',name:'Eranga2',occupation:'Banker2'},null),

    ]);
};

////ReactDOM.render(React.createElement(App),document.getElementById('root'));
//ReactDOM.createRoot(document.getElementById('root')).render(App())

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));

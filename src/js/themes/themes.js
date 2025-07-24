export const pressThemes = (e) => {
    e.preventDefault();
    if(e.target.name == 'theme'){
        console.log('Theme clicked!', e.target.value);
        let theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
    }
    
}
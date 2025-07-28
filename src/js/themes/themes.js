export const pressThemes = (e) => {
    e.preventDefault();
    if(e.target.name == 'theme'){
        let theme = e.target.value;
        document.documentElement.setAttribute('data-theme', theme);
    }
    
}
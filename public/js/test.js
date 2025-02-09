(function() {
    setTimeout(() => {
        const firstVisitKey = 'isFirstVisit';
    
        if (!localStorage.getItem(firstVisitKey)) {
            alert('Hi! Welcome to our website!');
            localStorage.setItem(firstVisitKey, true);
        }
    }, 2000);
})();

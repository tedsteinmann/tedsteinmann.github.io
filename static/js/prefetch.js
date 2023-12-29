document.querySelectorAll('.prefetch-link').forEach(link => {
    link.addEventListener('mouseover', function() {
        const url = this.getAttribute('href');
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // Prefetched data is available in 'data', you can store it as needed
                // For example, you can store it in a JavaScript object or local storage
            })
            .catch(error => console.error('Error prefetching:', error));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    
    envelope.addEventListener('click', () => {
        // Zarfı aç
        envelope.classList.toggle('open');
        
        // Body'ye 'bloom' sınıfı ekle (Laleler için)
        document.body.classList.toggle('bloom');
    });
});
// Form submission basic handle
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে
    
    const emailInput = document.getElementById('email').value;
    
    if(emailInput) {
        alert(`Thank you for signing up with: ${emailInput}! Let's start earning.`);
        // আপনি চাইলে এখানে ব্যাকএন্ড API কানেক্ট করতে পারেন।
        document.getElementById('email').value = ''; // ইনপুট ক্লিয়ার করা
    }
});

// সোশ্যাল বাটনগুলোর জন্য ক্লিক ইভেন্ট (ডেমো)
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function(event) {
        const provider = this.textContent.trim();
        
        if (provider.toLowerCase().includes('facebook')) {
            event.preventDefault();
            window.location.href = 'https://www.facebook.com';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const loginModal = document.getElementById('loginModal');
  const closeModalBtn = document.getElementById('closeModal');
  const videoCards = document.querySelectorAll('.video-card');
  
  const loginView = document.getElementById('loginView');
  const signupView = document.getElementById('signupView');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');
  
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');

  // Open modal
  function openModal() {
    if (loginModal) {
      loginModal.classList.add('active');
    }
  }

  // Close modal
  function closeModal() {
    if (loginModal) {
      loginModal.classList.remove('active');
      // Reset to login view on close
      loginView.style.display = 'block';
      signupView.style.display = 'none';
    }
  }

  // Event listener for video cards
  videoCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  // Switch views
  switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginView.style.display = 'none';
    signupView.style.display = 'block';
  });

  switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupView.style.display = 'none';
    loginView.style.display = 'block';
  });

  // Handle Login & Redirect Simulation
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = loginForm.querySelector('.btn-submit');
    btn.textContent = "Logging in...";
    
    setTimeout(() => {
      alert("Login Successful! Redirecting to video player...");
      closeModal();
      btn.textContent = "Log In to Watch Video";
      // এখানে আসল প্রজেক্টে ভিডিও পেজে রিডাইরেক্ট করতে পারেন: 
      // window.location.href = "watch.html";
    }, 1000);
  });

  // Handle Signup & Redirect Simulation
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = signupForm.querySelector('.btn-submit');
    btn.textContent = "Creating Account...";
    
    setTimeout(() => {
      alert("Registration Successful! Redirecting to video...");
      closeModal();
      btn.textContent = "Register & Watch";
    }, 1000);
  });

  // Close triggers
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (loginModal) {
    loginModal.addEventListener('click', (e) => {
      if (e.target === loginModal) {
        closeModal();
      }
    });
  }
});

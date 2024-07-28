document.addEventListener('DOMContentLoaded', () => {
  const Input = document.getElementById('user-input');
  const check = document.getElementById('check-btn');
  const clear = document.getElementById('clear-btn');
  const results = document.getElementById('results-div');
  check.addEventListener('click', () => {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
    if (!Input.value) {
      alert('Please provide a phone number');
    } else if (regex.test(Input.value)) {
      results.innerText = `Valid US number: ${Input.value}`;
    } else {
      results.innerText = `Invalid US number: ${Input.value}`;
    }
  });
  clear.addEventListener('click', () => {
    results.textContent = '';
    Input.value = '';
  });
});
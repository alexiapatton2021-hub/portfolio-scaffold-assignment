// Client-side validation demo; no network request or data storage.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const fields = [
  { id: 'full-name', error: 'name-error', label: 'Full name' },
  { id: 'email', error: 'email-error', label: 'Email address' },
  { id: 'message', error: 'message-error', label: 'Message' }
];
function checkField(item) {
  const input = document.getElementById(item.id);
  const error = document.getElementById(item.error);
  let message = '';
  if (!input.value.trim()) message = `${item.label} is required.`;
  else if (item.id === 'email' && !input.validity.valid) message = 'Enter a valid email address.';
  error.textContent = message;
  if (message) input.setAttribute('aria-invalid', 'true');
  else input.removeAttribute('aria-invalid');
  return !message;
}
fields.forEach(item => {
  document.getElementById(item.id).addEventListener('input', () => {
    checkField(item);
    status.textContent = '';
  });
});
form.addEventListener('submit', event => {
  event.preventDefault();
  const results = fields.map(checkField);
  if (results.every(Boolean)) {
    status.textContent = 'Your practice message passed validation. This demonstration does not send messages.';
  } else {
    status.textContent = 'Please correct the highlighted fields.';
    const firstInvalid = fields.find(item => document.getElementById(item.id).getAttribute('aria-invalid') === 'true');
    document.getElementById(firstInvalid.id).focus();
  }
});

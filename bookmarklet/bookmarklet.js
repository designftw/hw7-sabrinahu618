if (!document.body.dataset.passwordToggle || document.body.dataset.passwordToggle === 'hidden') {
  document.querySelectorAll('input[type=password]').forEach(field => {
    field.type = 'text';
    field.dataset.passVisible = 'true';
  });
  document.body.dataset.passwordToggle = 'visible';
} 
else {
  document.querySelectorAll('input[data-pass-visible=true]').forEach(field => {
    field.type = 'password';
    field.dataset.passVisible = 'false';
  });
  document.body.dataset.passwordToggle = 'hidden';
}



const checkPhoneNumber = (phone) => {
  const regex = /^\+998(20|33|77|88|90|91|93|94|95|97|98|99)\d{7}$/;

  return regex.test(phone);
};

module.exports = { checkPhoneNumber };

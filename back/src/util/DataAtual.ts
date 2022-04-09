export function currentDate() {
  let data;
  const dia = new Date().getDate();
  const mes = new Date().getMonth() + 1;
  const ano = new Date().getFullYear();

  if (dia < 10 && mes > 10) {
    data = `0${ano}-${mes}-${dia}`;
    return data;
  } else if (dia < 10 && mes < 10) {
    data = `0${ano}-0${mes}-${dia}`;
    return data;
  } else if (dia > 10 && mes < 10) {
    data = `${ano}-0${mes}-${dia}`;
    return data;
  } else {
    data = `${ano}-${mes}-${dia}`;
    return data;
  }
}

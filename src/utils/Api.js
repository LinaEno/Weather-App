import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';

export async function getWeather(search) {
  const data = await axios.get(
    `/weather?q=${search}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
  );
  return data;
}

export async function getWeatherFiveDays(search) {
  const data = await axios.get(
    `/forecast??q=${search}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
  );
  console.log(data);
  return data;
}

export async function showWeatherInYourLocation(position) {
  const data = await axios.get(
    `/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
  );
  return data;
}

export async function showWeatherInYourLocationFiveDays(position) {
  const data = await axios.get(
    `/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c3ca235f299a5ac03a9b15b27ae3fee0`
  );
  return data;
}

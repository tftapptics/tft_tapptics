export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  if (response.ok) {
    return await response.json();
  } else {
    console.log('nope')
    throw Error(response.statusText)
  }
}
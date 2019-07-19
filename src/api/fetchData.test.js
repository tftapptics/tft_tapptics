export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText)
  }
}
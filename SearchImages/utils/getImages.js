export let getImages = async (keyword) => {
  let url = `https://api.unsplash.com/photos?&query=${keyword}`;
  let json = [];
  let images = [];

  let response = await fetch(url, {
    headers: {
      Authorization: 'Client-ID -FgQfyqxUzVWJ_5X5m_U8KmLPXCR0uWVbXqfbkO6CFI',
    }
  });
  
  if (response.ok) {

    json = await response.json();
    console.log(json.results);
  } else {
    console.log("HTTP-Error: ");
  }
    
  json.forEach(element => {
    images.push(element.urls.small); 
  });

  return images;
}


  // let responseJson = await response.json();

  // let urls = responseJson[0].urls.thumb

  // console.log(responseJson);
  // console.log(urls);


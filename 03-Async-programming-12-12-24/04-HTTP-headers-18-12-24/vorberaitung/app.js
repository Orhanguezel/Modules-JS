async function getTracks(){
    const url = `https://corsproxy.io/${encodeURIComponent(
    'https://openwhyd.org/hot?format=json')}`;
    
    const response = await fetch(url);
    const tracks = await response.json();
    console.log(tracks);
}

getTracks();
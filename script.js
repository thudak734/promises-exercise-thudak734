const apiPromise = fetch("https://grandcircusco.github.io/demo-apis/donuts/1.json")
.then(res => res.jason())
.then(data => {console.log(data)})
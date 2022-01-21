const fs = require('fs');

fs.readdir('./docs',(err,files)=>{
	if (err) {
		console.log(err);
	} else{
		const sidebar = files.filter(item=>item.indexOf('.md')>-1&&item!=='index.md');
		sidebar.unshift('index.md');
		sidebar.sort((a,b)=>{return a - b});
		const content = `module.exports =${JSON.stringify(sidebar)}`;
		fs.writeFile('./config/sidebar.ts', content, { encoding: 'utf8' }, err => {console.log(err);});
	}
})

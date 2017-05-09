var productos = [
	{
		nombre: "pijama",
		tipo: "ropa",
	},
	{
		nombre: "nevera",
		tipo: "electrodoméstico",
	},
	{
		nombre: "asus",
		tipo: "computador",
	},
	{
		nombre: "macbook",
		tipo: "computador",
	},
	{
		nombre: "pijama",
		tipo: "ropa",
	},
	{
		nombre: "toshiba",
		tipo: "computador",
	}
];

var computadores = [];
var large = productos.length;
for (i=0 ; i<large ; i++){
	if(productos[i].tipo === 'computador'){
		computadores.push(productos[i]);
	}
}
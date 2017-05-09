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

var computadores = productos.filter(function(producto){return producto.tipo === 'computador'});


export let ano2024 = [
    pagos = [
        {
            id: 1,
            nome: 'Fulano1',
            nascimento: '2001-01-01'
        },
        {
            id: 2,
            nome: 'Fulano2',
            nascimento: '2002-02-02'
        },
        {
            id: 3,
            nome: 'Fulano3',
            nascimento: '2003-03-03'
        },
        {
            id: 4,
            nome: 'Fulano4',
            nascimento: '2004-04-04'
        },
        {
            id: 5,
            nome: 'Fulano5',
            nascimento: '2005-05-05'
        }
    ],
    naoPagos = [
        {
            id: 6,
            nome: 'Fulano6',
            nascimento: '2006-06-06'
        },
        {
            id: 7,
            nome: 'Fulano7',
            nascimento: '2007-07-07'
        },
        {
            id: 8,
            nome: 'Fulano8',
            nascimento: '2008-08-08'
        },
        {
            id: 9,
            nome: 'Fulano9',
            nascimento: '2009-09-09'
        },
        {
            id: 10,
            nome: 'Fulano10',
            nascimento: '2010-10-10'
        }
    ]
]

export let ano2025 = [
    pagos = [
        {
            id: 11,
            nome: 'Fulano11',
            nascimento: '2011-11-11'
        },
        {
            id: 12,
            nome: 'Fulano12',
            nascimento: '2012-12-12'
        },
        {
            id: 13,
            nome: 'Fulano13',
            nascimento: '2013-12-13'
        },
        {
            id: 14,
            nome: 'Fulano14',
            nascimento: '2014-12-14'
        },
        {
            id: 15,
            nome: 'Fulano15',
            nascimento: '2015-12-15'
        }
    ],
    naoPagos = [
        {
            id: 16,
            nome: 'Fulano16',
            nascimento: '2016-12-16'
        },
        {
            id: 17,
            nome: 'Fulano17',
            nascimento: '2017-12-17'
        },
        {
            id: 18,
            nome: 'Fulano18',
            nascimento: '2018-12-18'
        },
        {
            id: 19,
            nome: 'Fulano19',
            nascimento: '2019-12-19'
        },
        {
            id: 20,
            nome: 'Fulano20',
            nascimento: '2020-12-20'
        }
    ]
]
let mesespagos = []
let mesesnaopagos = []

let x;
let y;


for (x = 1; x <= 10; x++){
    x != 10 
    ? 
        mesespagos.push(
            {
                id : x,
                nome: 'Fulano '+ x,
                nascimento: '2001-01-0'+x
            }
        )
    : 
        mesespagos.push(
            {
                id : x,
                nome: 'Fulano '+ x,
                nascimento: '2001-01-'+x
            }
        )
}

export let listamesespagos = mesespagos.slice(0)

for (y = 11; y <= 20; y++){
    mesesnaopagos.push(
        {
            id: y,
            nome: 'Fulano '+ y,
            nascimento: '2001-01-'+y
        }
    )
}

export let listamesesnaopagos = mesesnaopagos.slice(0)

export function returnPagos() {
    return(mesespagos.nome)
}
export function returnNaoPagos(){
    return(mesesnaopagos.nome)
}
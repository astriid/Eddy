const input = [
    {
        price: 3000,
        kind: 'reductionVoucher',
        savings: 300,
        savingsType: 'total',
    },
    {
        price: undefined,
        kind: 'sales',
        savings: 10,
        savingsType: 'percent',
    },
    {
        price: 3000,
        kind: 'sales',
        savings: 15,
        savingsType: 'percent',
    }
];

const offer = {
    reductionVoucher: 'Bon de réduction',
    sales: 'Soldes'
};

function transform(input) {
    const output = [];
    const objFilter = input.filter((obj) => typeof obj.price !== 'undefined' && typeof obj.savings !== 'undefined');

    objFilter.map((obj) => {
        const { savingsType, price, savings, kind } = obj;
        const res = {};
        res.basePrice = (obj.price) + ' €'
        res.title = offer[kind];
        let gain = 0;

        if (savingsType === 'percent') {
            gain = (price * savings) / 100;
            res.savings = `${savings} %`;
        }

        else if (savingsType === 'total') {
            gain = savings;
            res.savings = gain + ' €';
        }
        res.description = ('Vous économisez [price] par rapport au prix initial').replace(/\[.*\]/gu, (gain + ' €'));
        res.price = (price - gain) + ' €';
        output.push(res);
    });

return output;
}

const output = transform(input);
console.log(output);

//output should be
// output :
// [
//   {
//     basePrice: '3 000 €',
//     description: 'Vous économisez 300 € par rapport au prix initial',
//     price: '2 700 €',
//     savings: '300 €',
//     title: 'Bon de réduction',
//   },
//   {
//     basePrice: '3 000 €',
//     description: 'Vous économisez 450 € par rapport au prix initial',
//     price: '2 550 €',
//     savings: '15 %',
//     title: 'Soldes',
//   }
// ]
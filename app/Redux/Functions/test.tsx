const obj: any = {
   
};

const a = (item: any) => {
    console.log('item', item)
    obj[`${item.product.name}`] = `${item} is cool`;
    return obj;
};

export default a;
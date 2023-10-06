function panggilFilterParamater() {
    var arr = [
        {negara: 'indonesia', benua: 'Asia'},
        {negara: 'Jerman', benua: 'Eropa'},
        {negara: 'Spanyol', benua: 'Eropa'},
        {negara: 'Korea', benua: 'Asia'},
        {negara: 'Portugal', benua: 'Eropa'},
        {negara: 'Amerika Serikat', benua: 'Amerika'},
    ];
    var benuaAsia = arr.filter(function(arr){
        return arr.benua === 'Asia';
    });
    var benuaEropa = arr.filter(function(arr){
        return arr.benua === 'Eropa';
    });
    console.log(benuaAsia);
    console.log(benuaEropa);

}
panggilFilterParamater()
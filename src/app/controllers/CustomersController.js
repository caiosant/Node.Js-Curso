let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
    { id: 2, name: "Google", site: "http://google.com" },
    { id: 3, name: "UOL", site: "http://uol.com.br" }
];

class CustomersController {

    // Lista os customers
    index(req, res) {
        return res.json(customers);
    };

    // Lista um customer
    show(req, res) {
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        return res.status(status).json(customer);
    };

    // Cria um customer
    create(req, res) {
        const { name, site } = req.body;
        const nextId = customers[customers.length - 1].id + 1;

        const newCustomer = { id: nextId, name, site };
        customers.push(newCustomer);

        return res.status(201).json(newCustomer);
    };

    // Atualiza um customer
    update(req, res) {
        const id = parseInt(req.params.id);
        const { name, site } = req.body;

        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if(index >= 0) {
            customers[index] = { id: parseInt(id), name, site};
        };
    
        return res.status(status).json(customers[index]);
    };
    
    //Deleta um customer
    destroy(req, res) {
        const id = parseInt(req.params.id);
    
        const index = customers.findIndex(item => item.id === id);
        const status = index >= 0 ? 200 : 404;

        if (index >= 0) {
            customers.splice(index, 1);
        };

        return res.status(status).json();
    };
};

module.exports = new CustomersController();
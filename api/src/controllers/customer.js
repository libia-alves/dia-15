const { HttpHelper } = require('../utils/http-helper');
const { CustomerModel } = require('../models/customer-model'); // Certifique-se de ter o modelo Customer definido corretamente
const { Validates } = require('../utils/validates');

class CustomerController {
    async create(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { Name, Email } = request.body;
            if (!Name || !Email) return httpHelper.badRequest('Parâmetros inválidos!');
            const customer = await CustomerModel.create({ Name, Email });
            return httpHelper.created(customer);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getAll(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const customers = await CustomerModel.findAll();
            return httpHelper.ok(customers);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async getById(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const customer = await CustomerModel.findByPk(id);
            if (!customer) return httpHelper.notFound('Cliente não encontrado!');
            return httpHelper.ok(customer);
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async update(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            const { Name, Email } = request.body;
            if (!id || !Name || !Email) return httpHelper.badRequest('Parâmetros inválidos!');
            const customerExists = await CustomerModel.findByPk(id);
            if (!customerExists) return httpHelper.notFound('Cliente não encontrado!');
            await CustomerModel.update(
                { Name, Email },
                { where: { ID: id } }
            );
            return httpHelper.ok({ message: 'Cliente atualizado com sucesso!' });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }

    async delete(request, response) {
        const httpHelper = new HttpHelper(response);
        try {
            const { id } = request.params;
            if (!id) return httpHelper.badRequest('Parâmetros inválidos!');
            const customerExists = await Customer.findByPk(id);
            if (!customerExists) return httpHelper.notFound('Cliente não encontrado!');
            await Customer.destroy({ where: { ID: id } });
            return httpHelper.ok({ message: 'Cliente deletado com sucesso!' });
        } catch (error) {
            return httpHelper.internalError(error);
        }
    }
}

module.exports = { CustomerController };

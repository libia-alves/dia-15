// HorarioController.js

const { HttpHelper } = require('../utils/http-helper');
const { HorarioModel } = require('../models/horario-model'); // Importe o modelo correto

class HorarioController {
  async create(request, response) {
    const httpHelper = new HttpHelper(response);
    try {
      const { Horário_Partida, Horário_Chegada } = request.body;

      if (!Horário_Partida || !Horário_Chegada) return httpHelper.badRequest('Parâmetros inválidos!');

      // Validações adicionais, se necessário

      const horario = await HorarioModel.create({
        Horário_Partida,
        Horário_Chegada,
      });

      return httpHelper.created(horario);
    } catch (error) {
      return httpHelper.internalError(error);
    }
  }

  async getAll(request, response) {
    const httpHelper = new HttpHelper(response);
    try {
      const horarios = await HorarioModel.findAll();
      return httpHelper.ok(horarios);
    } catch (error) {
      return httpHelper.internalError(error);
    }
  }

  async update(request, response) {
    const httpHelper = new HttpHelper(response);
    try {
      const { id } = request.params;
      const { Horário_Partida, Horário_Chegada } = request.body;

      if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

      // Validações adicionais, se necessário

      const horarioExists = await HorarioModel.findByPk(id);
      if (!horarioExists) return httpHelper.notFound('Horário não encontrado!');

      await horarioExists.update({
        Horário_Partida,
        Horário_Chegada,
      });

      return httpHelper.ok({
        message: 'Horário atualizado com sucesso!',
      });
    } catch (error) {
      return httpHelper.internalError(error);
    }
  }

  async delete(request, response) {
    const httpHelper = new HttpHelper(response);
    try {
      const { id } = request.params;
      if (!id) return httpHelper.badRequest('Parâmetros inválidos!');

      const horarioExists = await HorarioModel.findByPk(id);
      if (!horarioExists) return httpHelper.notFound('Horário não encontrado!');

      await HorarioModel.destroy({ where: { ID: id } });

      return httpHelper.ok({
        message: 'Horário excluído com sucesso!',
      });
    } catch (error) {
      return httpHelper.internalError(error);
    }
  }
}

module.exports = { HorarioController };

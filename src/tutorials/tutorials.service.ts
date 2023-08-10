import { Injectable } from '@nestjs/common';
import { CreateTutorialDto } from './dto/create-tutorial.dto';
import { UpdateTutorialDto } from './dto/update-tutorial.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Tutorial } from './tutorials.model';

@Injectable()
export class TutorialsService {

  constructor(
    @InjectModel(Tutorial)
    private tutorialModel: typeof Tutorial,
  ) {
  }

  create(createTutorialDto: CreateTutorialDto) {
    return 'This action adds a new tutorial';
  }

  async findAll() {
    const q = await this.tutorialModel.findAll();
    let data = {};
    if (q) {
      data = {
        status: 'success',
        message: 'Data found ' + q.length + ' data',
        data: q
      }
    } else {
      data = {
        status: 'failed',
        message: 'Data not found',
        data: null
      }
    }
    return data;
  }

  async findOne(id: number) {
    const q = await this.tutorialModel.findOne({
      where: {
        id: id
      }
    });
    let data = {};
    if (q) {
      data = {
        status: 'success',
        message: 'Data found',
        data: q
      }
    }
    else {
      data = {
        status: 'failed',
        message: 'Data not found',
        data: null
      }
    }
    return data;
  }

  update(id: number, updateTutorialDto: UpdateTutorialDto) {
    const q = this.tutorialModel.update(updateTutorialDto, {
      where: {
        id: id
      }
    });
    let data = {};
    if (q) {
      data = {
        status: 'success',
        message: 'Data updated',
        data: q
      }
    }
    else {
      data = {
        status: 'failed',
        message: 'Data not updated',
        data: null
      }
    }
    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} tutorial`;
  }
}

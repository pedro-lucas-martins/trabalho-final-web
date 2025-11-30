/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./src/prisma/prisma.module.ts");
const materia_module_1 = __webpack_require__(/*! ./modules/materia/materia.module */ "./src/modules/materia/materia.module.ts");
const topico_module_1 = __webpack_require__(/*! ./modules/topico/topico.module */ "./src/modules/topico/topico.module.ts");
const recurso_module_1 = __webpack_require__(/*! ./modules/recurso/recurso.module */ "./src/modules/recurso/recurso.module.ts");
const sessao_estudo_module_1 = __webpack_require__(/*! ./modules/sessao-estudo/sessao-estudo.module */ "./src/modules/sessao-estudo/sessao-estudo.module.ts");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            materia_module_1.MateriaModule,
            topico_module_1.TopicoModule,
            recurso_module_1.RecursoModule,
            sessao_estudo_module_1.SessaoEstudoModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);


/***/ }),

/***/ "./src/modules/materia/dto/create-materia.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/materia/dto/create-materia.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateMateriaDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateMateriaDto {
}
exports.CreateMateriaDto = CreateMateriaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateMateriaDto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1000),
    __metadata("design:type", String)
], CreateMateriaDto.prototype, "descricao", void 0);


/***/ }),

/***/ "./src/modules/materia/dto/update-materia.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/materia/dto/update-materia.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateMateriaDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_materia_dto_1 = __webpack_require__(/*! ./create-materia.dto */ "./src/modules/materia/dto/create-materia.dto.ts");
class UpdateMateriaDto extends (0, mapped_types_1.PartialType)(create_materia_dto_1.CreateMateriaDto) {
}
exports.UpdateMateriaDto = UpdateMateriaDto;


/***/ }),

/***/ "./src/modules/materia/materia.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/materia/materia.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MateriaController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const materia_service_1 = __webpack_require__(/*! ./materia.service */ "./src/modules/materia/materia.service.ts");
const create_materia_dto_1 = __webpack_require__(/*! ./dto/create-materia.dto */ "./src/modules/materia/dto/create-materia.dto.ts");
const update_materia_dto_1 = __webpack_require__(/*! ./dto/update-materia.dto */ "./src/modules/materia/dto/update-materia.dto.ts");
let MateriaController = class MateriaController {
    constructor(materiaService) {
        this.materiaService = materiaService;
    }
    create(createMateriaDto) {
        return this.materiaService.create(createMateriaDto);
    }
    findAll() {
        return this.materiaService.findAll();
    }
    findOne(id) {
        return this.materiaService.findOne(id);
    }
    getProgress(id) {
        return this.materiaService.getProgress(id);
    }
    update(id, updateMateriaDto) {
        return this.materiaService.update(id, updateMateriaDto);
    }
    remove(id) {
        return this.materiaService.remove(id);
    }
};
exports.MateriaController = MateriaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_materia_dto_1.CreateMateriaDto !== "undefined" && create_materia_dto_1.CreateMateriaDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/progress'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "getProgress", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_materia_dto_1.UpdateMateriaDto !== "undefined" && update_materia_dto_1.UpdateMateriaDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MateriaController.prototype, "remove", null);
exports.MateriaController = MateriaController = __decorate([
    (0, common_1.Controller)('api/materias'),
    __metadata("design:paramtypes", [typeof (_a = typeof materia_service_1.MateriaService !== "undefined" && materia_service_1.MateriaService) === "function" ? _a : Object])
], MateriaController);


/***/ }),

/***/ "./src/modules/materia/materia.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/materia/materia.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MateriaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const materia_service_1 = __webpack_require__(/*! ./materia.service */ "./src/modules/materia/materia.service.ts");
const materia_controller_1 = __webpack_require__(/*! ./materia.controller */ "./src/modules/materia/materia.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
let MateriaModule = class MateriaModule {
};
exports.MateriaModule = MateriaModule;
exports.MateriaModule = MateriaModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [materia_controller_1.MateriaController],
        providers: [materia_service_1.MateriaService],
    })
], MateriaModule);


/***/ }),

/***/ "./src/modules/materia/materia.service.ts":
/*!************************************************!*\
  !*** ./src/modules/materia/materia.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MateriaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let MateriaService = class MateriaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createMateriaDto) {
        return this.prisma.materia.create({
            data: createMateriaDto,
            include: {
                topicos: true,
            },
        });
    }
    async findAll() {
        return this.prisma.materia.findMany({
            include: {
                topicos: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async findOne(id) {
        const materia = await this.prisma.materia.findUnique({
            where: { id },
            include: {
                topicos: {
                    include: {
                        recursos: true,
                        sessoesEstudo: true,
                    },
                },
            },
        });
        if (!materia) {
            throw new common_1.NotFoundException(`Matéria com ID ${id} não encontrada`);
        }
        return materia;
    }
    async update(id, updateMateriaDto) {
        await this.findOne(id);
        return this.prisma.materia.update({
            where: { id },
            data: updateMateriaDto,
            include: {
                topicos: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.materia.delete({
            where: { id },
        });
    }
    async getProgress(id) {
        const materia = await this.findOne(id);
        if (materia.topicos.length === 0) {
            return {
                total: 0,
                concluidos: 0,
                percentual: 0,
            };
        }
        const concluidos = materia.topicos.filter((t) => t.status === "CONCLUIDO").length;
        return {
            total: materia.topicos.length,
            concluidos,
            percentual: Math.round((concluidos / materia.topicos.length) * 100),
        };
    }
};
exports.MateriaService = MateriaService;
exports.MateriaService = MateriaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], MateriaService);


/***/ }),

/***/ "./src/modules/recurso/dto/create-recurso.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/recurso/dto/create-recurso.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateRecursoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateRecursoDto {
}
exports.CreateRecursoDto = CreateRecursoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateRecursoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    __metadata("design:type", String)
], CreateRecursoDto.prototype, "url", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateRecursoDto.prototype, "topicoId", void 0);


/***/ }),

/***/ "./src/modules/recurso/dto/update-recurso.dto.ts":
/*!*******************************************************!*\
  !*** ./src/modules/recurso/dto/update-recurso.dto.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateRecursoDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_recurso_dto_1 = __webpack_require__(/*! ./create-recurso.dto */ "./src/modules/recurso/dto/create-recurso.dto.ts");
class UpdateRecursoDto extends (0, mapped_types_1.PartialType)(create_recurso_dto_1.CreateRecursoDto) {
}
exports.UpdateRecursoDto = UpdateRecursoDto;


/***/ }),

/***/ "./src/modules/recurso/recurso.controller.ts":
/*!***************************************************!*\
  !*** ./src/modules/recurso/recurso.controller.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const recurso_service_1 = __webpack_require__(/*! ./recurso.service */ "./src/modules/recurso/recurso.service.ts");
const create_recurso_dto_1 = __webpack_require__(/*! ./dto/create-recurso.dto */ "./src/modules/recurso/dto/create-recurso.dto.ts");
const update_recurso_dto_1 = __webpack_require__(/*! ./dto/update-recurso.dto */ "./src/modules/recurso/dto/update-recurso.dto.ts");
let RecursoController = class RecursoController {
    constructor(recursoService) {
        this.recursoService = recursoService;
    }
    create(createRecursoDto) {
        return this.recursoService.create(createRecursoDto);
    }
    findAll() {
        return this.recursoService.findAll();
    }
    findOne(id) {
        return this.recursoService.findOne(id);
    }
    findByTopico(topicoId) {
        return this.recursoService.findByTopico(topicoId);
    }
    update(id, updateRecursoDto) {
        return this.recursoService.update(id, updateRecursoDto);
    }
    remove(id) {
        return this.recursoService.remove(id);
    }
};
exports.RecursoController = RecursoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_recurso_dto_1.CreateRecursoDto !== "undefined" && create_recurso_dto_1.CreateRecursoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('topico/:topicoId'),
    __param(0, (0, common_1.Param)('topicoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "findByTopico", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_recurso_dto_1.UpdateRecursoDto !== "undefined" && update_recurso_dto_1.UpdateRecursoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RecursoController.prototype, "remove", null);
exports.RecursoController = RecursoController = __decorate([
    (0, common_1.Controller)('api/recursos'),
    __metadata("design:paramtypes", [typeof (_a = typeof recurso_service_1.RecursoService !== "undefined" && recurso_service_1.RecursoService) === "function" ? _a : Object])
], RecursoController);


/***/ }),

/***/ "./src/modules/recurso/recurso.module.ts":
/*!***********************************************!*\
  !*** ./src/modules/recurso/recurso.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const recurso_service_1 = __webpack_require__(/*! ./recurso.service */ "./src/modules/recurso/recurso.service.ts");
const recurso_controller_1 = __webpack_require__(/*! ./recurso.controller */ "./src/modules/recurso/recurso.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
let RecursoModule = class RecursoModule {
};
exports.RecursoModule = RecursoModule;
exports.RecursoModule = RecursoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [recurso_controller_1.RecursoController],
        providers: [recurso_service_1.RecursoService],
    })
], RecursoModule);


/***/ }),

/***/ "./src/modules/recurso/recurso.service.ts":
/*!************************************************!*\
  !*** ./src/modules/recurso/recurso.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RecursoService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let RecursoService = class RecursoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createRecursoDto) {
        return this.prisma.recurso.create({
            data: createRecursoDto,
            include: {
                topico: true,
            },
        });
    }
    async findAll() {
        return this.prisma.recurso.findMany({
            include: {
                topico: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const recurso = await this.prisma.recurso.findUnique({
            where: { id },
            include: {
                topico: true,
            },
        });
        if (!recurso) {
            throw new common_1.NotFoundException(`Recurso com ID ${id} não encontrado`);
        }
        return recurso;
    }
    async findByTopico(topicoId) {
        return this.prisma.recurso.findMany({
            where: { topicoId },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async update(id, updateRecursoDto) {
        await this.findOne(id);
        return this.prisma.recurso.update({
            where: { id },
            data: updateRecursoDto,
            include: {
                topico: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.recurso.delete({
            where: { id },
        });
    }
};
exports.RecursoService = RecursoService;
exports.RecursoService = RecursoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], RecursoService);


/***/ }),

/***/ "./src/modules/sessao-estudo/dto/create-sessao-estudo.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/sessao-estudo/dto/create-sessao-estudo.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSessaoEstudoDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateSessaoEstudoDto {
}
exports.CreateSessaoEstudoDto = CreateSessaoEstudoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateSessaoEstudoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSessaoEstudoDto.prototype, "dataInicio", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateSessaoEstudoDto.prototype, "dataFim", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateSessaoEstudoDto.prototype, "topicoId", void 0);


/***/ }),

/***/ "./src/modules/sessao-estudo/dto/update-sessao-estudo.dto.ts":
/*!*******************************************************************!*\
  !*** ./src/modules/sessao-estudo/dto/update-sessao-estudo.dto.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSessaoEstudoDto = exports.StatusSessaoEnum = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
// Ajuste estes valores conforme o seu Enum no schema.prisma
var StatusSessaoEnum;
(function (StatusSessaoEnum) {
    StatusSessaoEnum["NAO_INICIADO"] = "NAO_INICIADO";
    StatusSessaoEnum["EM_ANDAMENTO"] = "EM_ANDAMENTO";
    StatusSessaoEnum["CONCLUIDO"] = "CONCLUIDO";
})(StatusSessaoEnum || (exports.StatusSessaoEnum = StatusSessaoEnum = {}));
class UpdateSessaoEstudoDto {
}
exports.UpdateSessaoEstudoDto = UpdateSessaoEstudoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(StatusSessaoEnum),
    __metadata("design:type", String)
], UpdateSessaoEstudoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSessaoEstudoDto.prototype, "anotacoes", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSessaoEstudoDto.prototype, "dataInicio", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], UpdateSessaoEstudoDto.prototype, "dataFim", void 0);


/***/ }),

/***/ "./src/modules/sessao-estudo/sessao-estudo.controller.ts":
/*!***************************************************************!*\
  !*** ./src/modules/sessao-estudo/sessao-estudo.controller.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessaoEstudoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sessao_estudo_service_1 = __webpack_require__(/*! ./sessao-estudo.service */ "./src/modules/sessao-estudo/sessao-estudo.service.ts");
const create_sessao_estudo_dto_1 = __webpack_require__(/*! ./dto/create-sessao-estudo.dto */ "./src/modules/sessao-estudo/dto/create-sessao-estudo.dto.ts");
const update_sessao_estudo_dto_1 = __webpack_require__(/*! ./dto/update-sessao-estudo.dto */ "./src/modules/sessao-estudo/dto/update-sessao-estudo.dto.ts");
let SessaoEstudoController = class SessaoEstudoController {
    constructor(sessaoEstudoService) {
        this.sessaoEstudoService = sessaoEstudoService;
    }
    create(createSessaoEstudoDto) {
        return this.sessaoEstudoService.create(createSessaoEstudoDto);
    }
    findAll(startDate, endDate) {
        if (startDate && endDate) {
            return this.sessaoEstudoService.findByDateRange(new Date(startDate), new Date(endDate));
        }
        return this.sessaoEstudoService.findAll();
    }
    findOne(id) {
        return this.sessaoEstudoService.findOne(id);
    }
    findByTopico(topicoId) {
        return this.sessaoEstudoService.findByTopico(topicoId);
    }
    update(id, updateSessaoEstudoDto) {
        return this.sessaoEstudoService.update(id, updateSessaoEstudoDto);
    }
    remove(id) {
        return this.sessaoEstudoService.remove(id);
    }
};
exports.SessaoEstudoController = SessaoEstudoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_sessao_estudo_dto_1.CreateSessaoEstudoDto !== "undefined" && create_sessao_estudo_dto_1.CreateSessaoEstudoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('startDate')),
    __param(1, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('topico/:topicoId'),
    __param(0, (0, common_1.Param)('topicoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "findByTopico", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_sessao_estudo_dto_1.UpdateSessaoEstudoDto !== "undefined" && update_sessao_estudo_dto_1.UpdateSessaoEstudoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessaoEstudoController.prototype, "remove", null);
exports.SessaoEstudoController = SessaoEstudoController = __decorate([
    (0, common_1.Controller)('api/sessoes'),
    __metadata("design:paramtypes", [typeof (_a = typeof sessao_estudo_service_1.SessaoEstudoService !== "undefined" && sessao_estudo_service_1.SessaoEstudoService) === "function" ? _a : Object])
], SessaoEstudoController);


/***/ }),

/***/ "./src/modules/sessao-estudo/sessao-estudo.module.ts":
/*!***********************************************************!*\
  !*** ./src/modules/sessao-estudo/sessao-estudo.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessaoEstudoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sessao_estudo_service_1 = __webpack_require__(/*! ./sessao-estudo.service */ "./src/modules/sessao-estudo/sessao-estudo.service.ts");
const sessao_estudo_controller_1 = __webpack_require__(/*! ./sessao-estudo.controller */ "./src/modules/sessao-estudo/sessao-estudo.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
let SessaoEstudoModule = class SessaoEstudoModule {
};
exports.SessaoEstudoModule = SessaoEstudoModule;
exports.SessaoEstudoModule = SessaoEstudoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [sessao_estudo_controller_1.SessaoEstudoController],
        providers: [sessao_estudo_service_1.SessaoEstudoService],
    })
], SessaoEstudoModule);


/***/ }),

/***/ "./src/modules/sessao-estudo/sessao-estudo.service.ts":
/*!************************************************************!*\
  !*** ./src/modules/sessao-estudo/sessao-estudo.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessaoEstudoService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let SessaoEstudoService = class SessaoEstudoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSessaoEstudoDto) {
        return this.prisma.sessaoEstudo.create({
            data: {
                ...createSessaoEstudoDto,
                dataInicio: new Date(createSessaoEstudoDto.dataInicio),
                dataFim: new Date(createSessaoEstudoDto.dataFim),
            },
            include: {
                topico: true,
            },
        });
    }
    async findAll() {
        return this.prisma.sessaoEstudo.findMany({
            include: {
                topico: true,
            },
            orderBy: {
                dataInicio: 'desc',
            },
        });
    }
    async findOne(id) {
        const sessao = await this.prisma.sessaoEstudo.findUnique({
            where: { id },
            include: {
                topico: true,
            },
        });
        if (!sessao) {
            throw new common_1.NotFoundException(`Sessão de estudo com ID ${id} não encontrada`);
        }
        return sessao;
    }
    async findByTopico(topicoId) {
        return this.prisma.sessaoEstudo.findMany({
            where: { topicoId },
            orderBy: {
                dataInicio: 'desc',
            },
        });
    }
    async findByDateRange(startDate, endDate) {
        return this.prisma.sessaoEstudo.findMany({
            where: {
                dataInicio: {
                    gte: startDate,
                },
                dataFim: {
                    lte: endDate,
                },
            },
            include: {
                topico: true,
            },
            orderBy: {
                dataInicio: 'asc',
            },
        });
    }
    async update(id, updateSessaoEstudoDto) {
        await this.findOne(id);
        const data = { ...updateSessaoEstudoDto };
        if (updateSessaoEstudoDto.dataInicio) {
            data.dataInicio = new Date(updateSessaoEstudoDto.dataInicio);
        }
        if (updateSessaoEstudoDto.dataFim) {
            data.dataFim = new Date(updateSessaoEstudoDto.dataFim);
        }
        return this.prisma.sessaoEstudo.update({
            where: { id },
            data,
            include: {
                topico: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.sessaoEstudo.delete({
            where: { id },
        });
    }
};
exports.SessaoEstudoService = SessaoEstudoService;
exports.SessaoEstudoService = SessaoEstudoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SessaoEstudoService);


/***/ }),

/***/ "./src/modules/topico/dto/create-topico.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/topico/dto/create-topico.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTopicoDto = exports.StatusEnum = exports.PrioridadeEnum = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var PrioridadeEnum;
(function (PrioridadeEnum) {
    PrioridadeEnum["BAIXA"] = "BAIXA";
    PrioridadeEnum["MEDIA"] = "MEDIA";
    PrioridadeEnum["ALTA"] = "ALTA";
})(PrioridadeEnum || (exports.PrioridadeEnum = PrioridadeEnum = {}));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["NAO_INICIADO"] = "NAO_INICIADO";
    StatusEnum["EM_ANDAMENTO"] = "EM_ANDAMENTO";
    StatusEnum["CONCLUIDO"] = "CONCLUIDO";
})(StatusEnum || (exports.StatusEnum = StatusEnum = {}));
class CreateTopicoDto {
}
exports.CreateTopicoDto = CreateTopicoDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(1),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateTopicoDto.prototype, "titulo", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(PrioridadeEnum),
    __metadata("design:type", String)
], CreateTopicoDto.prototype, "prioridade", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(StatusEnum),
    __metadata("design:type", String)
], CreateTopicoDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTopicoDto.prototype, "materiaId", void 0);


/***/ }),

/***/ "./src/modules/topico/dto/update-topico.dto.ts":
/*!*****************************************************!*\
  !*** ./src/modules/topico/dto/update-topico.dto.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTopicoDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "@nestjs/mapped-types");
const create_topico_dto_1 = __webpack_require__(/*! ./create-topico.dto */ "./src/modules/topico/dto/create-topico.dto.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
// Precisamos importar o Enum original para validar
const create_topico_dto_2 = __webpack_require__(/*! ./create-topico.dto */ "./src/modules/topico/dto/create-topico.dto.ts");
class UpdateTopicoDto extends (0, mapped_types_1.PartialType)(create_topico_dto_1.CreateTopicoDto) {
}
exports.UpdateTopicoDto = UpdateTopicoDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(create_topico_dto_2.StatusEnum),
    __metadata("design:type", typeof (_a = typeof create_topico_dto_2.StatusEnum !== "undefined" && create_topico_dto_2.StatusEnum) === "function" ? _a : Object)
], UpdateTopicoDto.prototype, "status", void 0);


/***/ }),

/***/ "./src/modules/topico/topico.controller.ts":
/*!*************************************************!*\
  !*** ./src/modules/topico/topico.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicoController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const topico_service_1 = __webpack_require__(/*! ./topico.service */ "./src/modules/topico/topico.service.ts");
const create_topico_dto_1 = __webpack_require__(/*! ./dto/create-topico.dto */ "./src/modules/topico/dto/create-topico.dto.ts");
const update_topico_dto_1 = __webpack_require__(/*! ./dto/update-topico.dto */ "./src/modules/topico/dto/update-topico.dto.ts");
let TopicoController = class TopicoController {
    constructor(topicoService) {
        this.topicoService = topicoService;
    }
    create(createTopicoDto) {
        return this.topicoService.create(createTopicoDto);
    }
    findAll() {
        return this.topicoService.findAll();
    }
    findOne(id) {
        return this.topicoService.findOne(id);
    }
    findByMateria(materiaId) {
        return this.topicoService.findByMateria(materiaId);
    }
    update(id, updateTopicoDto) {
        return this.topicoService.update(id, updateTopicoDto);
    }
    remove(id) {
        return this.topicoService.remove(id);
    }
};
exports.TopicoController = TopicoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_topico_dto_1.CreateTopicoDto !== "undefined" && create_topico_dto_1.CreateTopicoDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('materia/:materiaId'),
    __param(0, (0, common_1.Param)('materiaId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "findByMateria", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_topico_dto_1.UpdateTopicoDto !== "undefined" && update_topico_dto_1.UpdateTopicoDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TopicoController.prototype, "remove", null);
exports.TopicoController = TopicoController = __decorate([
    (0, common_1.Controller)('api/topicos'),
    __metadata("design:paramtypes", [typeof (_a = typeof topico_service_1.TopicoService !== "undefined" && topico_service_1.TopicoService) === "function" ? _a : Object])
], TopicoController);


/***/ }),

/***/ "./src/modules/topico/topico.module.ts":
/*!*********************************************!*\
  !*** ./src/modules/topico/topico.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicoModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const topico_service_1 = __webpack_require__(/*! ./topico.service */ "./src/modules/topico/topico.service.ts");
const topico_controller_1 = __webpack_require__(/*! ./topico.controller */ "./src/modules/topico/topico.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ../../prisma/prisma.module */ "./src/prisma/prisma.module.ts");
let TopicoModule = class TopicoModule {
};
exports.TopicoModule = TopicoModule;
exports.TopicoModule = TopicoModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        controllers: [topico_controller_1.TopicoController],
        providers: [topico_service_1.TopicoService],
    })
], TopicoModule);


/***/ }),

/***/ "./src/modules/topico/topico.service.ts":
/*!**********************************************!*\
  !*** ./src/modules/topico/topico.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TopicoService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../../prisma/prisma.service */ "./src/prisma/prisma.service.ts");
let TopicoService = class TopicoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTopicoDto) {
        // Extraímos o materiaId e deixamos o resto das propriedades em 'dadosTopico'
        const { materiaId, ...dadosTopico } = createTopicoDto;
        return this.prisma.topico.create({
            data: {
                ...dadosTopico,
                // Usamos 'connect' para fazer a relação com a tabela de Materia
                materia: {
                    connect: { id: materiaId },
                },
            },
            include: {
                recursos: true,
                sessoesEstudo: true,
            },
        });
    }
    async findAll() {
        return this.prisma.topico.findMany({
            include: {
                recursos: true,
                sessoesEstudo: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async findOne(id) {
        const topico = await this.prisma.topico.findUnique({
            where: { id },
            include: {
                recursos: true,
                sessoesEstudo: true,
                materia: true,
            },
        });
        if (!topico) {
            throw new common_1.NotFoundException(`Tópico com ID ${id} não encontrado`);
        }
        return topico;
    }
    async findByMateria(materiaId) {
        return this.prisma.topico.findMany({
            where: { materiaId },
            include: {
                recursos: true,
                sessoesEstudo: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
    }
    async update(id, updateTopicoDto) {
        await this.findOne(id);
        return this.prisma.topico.update({
            where: { id },
            data: updateTopicoDto,
            include: {
                recursos: true,
                sessoesEstudo: true,
            },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.topico.delete({
            where: { id },
        });
    }
};
exports.TopicoService = TopicoService;
exports.TopicoService = TopicoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], TopicoService);


/***/ }),

/***/ "./src/prisma/prisma.module.ts":
/*!*************************************!*\
  !*** ./src/prisma/prisma.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./src/prisma/prisma.service.ts");
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),

/***/ "./src/prisma/prisma.service.ts":
/*!**************************************!*\
  !*** ./src/prisma/prisma.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const client_1 = __webpack_require__(/*! @prisma/client */ "@prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mapped-types":
/*!***************************************!*\
  !*** external "@nestjs/mapped-types" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    // Habilitar CORS
    app.enableCors({
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials: true,
    });
    // Usar ValidationPipe globalmente
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
}
bootstrap().catch((err) => {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
});

})();

/******/ })()
;
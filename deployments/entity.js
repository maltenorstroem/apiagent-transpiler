/**
 * Autogenerated file
 * Create time 2018-12-13 10:58:32.083998 +0100 CET m=+0.014718584
 * Copyright (c) 2019 Adcubum AG
 *
 */

import {PolymerElement} from '@polymer/polymer/polymer-element.js';
import {ApiService} from '/apiService.js'

/**
 * `TaskService`
 */

/**
 * Interface Definitonen für das Modul Task 
Zweck diese Moduls ist es sowas wie eine TO-DO Liste zu haben
 */

/**
 * package: task
 * version: 1
 */

/**
 * ```
 * `CreateTaskRequest`
 * 
 * - id ulid 
 * - title string 
 * - description string 
 *
 * ```
 *
 * @customElement
 * @polymer
 * @extends PolymerElement
 * @appliesMixin ApiService
 * @demo demo/index.html
 */
class TaskServiceEntity extends ApiService(PolymerElement) {

    static get properties() {
        return {
            /**
             * Exposed attributes
             * Which properties should be exposed?
             */

            /**
             * rawEntity includes all data from the response
             * data, links, ...
             */
            rawEntity: {
                type: Object,
                notify: true,
            },
            /**
             * Model from protocolBuffer definition 'Body'
             */
            entity: {
                type: Object,
                value: () => {
                    return {  
                         id: ulid, 
                         title: string, 
                         description: string, 
                    }
                },
                notify: true,
            },
            /**
             * Property-Meta informationen
             * extended meta information about the entity
             */
            meta: {
                type: Object,
                value: () => {
                    return {
                    
                        id: {
                           description: 'für IDs werden wir intern ulid verwenden',
                           type: 'ulid',
                           mandatory: false,
                         }, 
                        title: {
                           description: 'Einzeilige Beschreibung des Tasks Wird in den Übersichtslisten verwendet.',
                           type: 'string',
                           mandatory: false,
                         }, 
                        description: {
                           description: 'Beschreibung des Tasks',
                           type: 'string',
                           mandatory: false,
                         }, 

                    }
                },
                notify: true,
            },
            /**
             * Hypermedia As The Engine Of Application State (HATEOAS)
             * Array of HATEOAS links
             */
            hateoas: {
                type: Array,
            },

        };
    }


    /**
     *  ```
     *  rpc CreateTask (CreateTaskRequest) returns (TaskEntity) {
     *      option (google.api.http) = {
     *          post: "/tasks"
     *          body: "item"
     *      };
     *  }
     *  ```
     * @public
     */
    createTask() {
  
   
        const createRequest = new Request('/tasks', {
            method: 'POST',
            headers: {},
            body: JSON.stringify(this.entity)
        });
        this.fieldErrors = this._validateFields();
        if (!this.fieldErrors.error.length){
            this.generateRequest(createRequest);
        }
    }
    /**
     *  ```
     *  rpc GetTask (GetTaskRequest) returns (TaskEntity) {
     *      option (google.api.http) = {
     *          get: "/tasks/{id}"
     *      };
     *  }
     *  ```
     * @public
     */
    getTask() {
  
   
        const createRequest = new Request('/tasks/{id}', {
            method: 'GET',
            headers: {}
        });
        this.generateRequest(createRequest);
    }
    /**
     *  ```
     *  rpc ListTask (ListTaskRequest) returns (TaskCollection) {
     *      option (google.api.http) = {
     *          get: "/tasks"
     *      };
     *  }
     *  ```
     * @public
     */
    listTask() {
  
   
        const createRequest = new Request('/tasks', {
            method: 'GET',
            headers: {}
        });
        this.generateRequest(createRequest);
    }
    /**
     *  ```
     *  rpc DeleteTask (DeleteTaskRequest) returns (DeleteTaskResponse) {
     *      option (google.api.http) = {
     *          delete: "/tasks/{id}"
     *      };
     *  }
     *  ```
     * @public
     */
    deleteTask() {
  
   
        const createRequest = new Request('/tasks/{id}', {
            method: 'DELETE',
            headers: {}
        });
        this.generateRequest(createRequest);
    }
    /**
     *  ```
     *  rpc UpdateTask (UpdateTaskRequest) returns (TaskEntity) {
     *      option (google.api.http) = {
     *          put: "/tasks/{id}"
     *          body: "item"
     *      };
     *  }
     *  ```
     * @public
     */
    updateTask() {
  
   
        const createRequest = new Request('/tasks/{id}', {
            method: 'PUT',
            headers: {},
            body: JSON.stringify(this.entity)
        });
        this.fieldErrors = this._validateFields();
        if (!this.fieldErrors.error.length){
            this.generateRequest(createRequest);
        }
    }
    /**
     *  ```
     *  rpc CompleteTask (GetTaskRequest) returns (TaskEntity) {
     *      option (google.api.http) = {
     *          post: "/tasks/{id}:complete"
     *      };
     *  }
     *  ```
     * @public
     */
    completeTask() {
  
   
        const createRequest = new Request('/tasks/{id}:complete', {
            method: 'POST',
            headers: {},
            body: JSON.stringify(this.entity)
        });
        this.fieldErrors = this._validateFields();
        if (!this.fieldErrors.error.length){
            this.generateRequest(createRequest);
        }
    }

    /**
     * Inject von einer raw Entity. Normalerweise ein Item aus einer Collection.
     * Ein Inject erstellt eine komplette Entität für die weitere Verwendung.
     * Das Verhalten ist analog wie nach einem get...
     *
     * @event inject-completed(payload: entity Model)
     * @param rawEntity
     * @public
     */
    inject(rawEntity) {

        this._processResponse(rawEntity);
    }

    /**
     * Traversiert durch alle Felder der Entity
     * und ruft die interne Funktion '_validateField(fieldId)' auf.
     * @return fieldError{}
     * @private
     */
    _validateFields(){
        for (let f in this.entity){
            if (this.entity.hasOwnProperty(f)) {
                this.fieldErrors = this._validateField(f);
            }
        }
        return this.fieldErrors;
    }

    /**
     * - Ruft pro Feld den Standardvalidator des apiService auf.
     * - Ruft - falls vorhanden - die dynamischen Validierungsfunktionen aus den Metainformationen auf.
     * @param fieldId
     * @return fieldError{}
     * @private
     */
    _validateField(fieldId) {
        this.fieldErrors = super._validateField(fieldId);
        console.log('entity validateField:', fieldId);

        // custom validation function from meta
        if (typeof this.meta[fieldId].validate === 'function'){
            this.fieldErrors = this.meta[fieldId].validate(this);
        }
        return this.fieldErrors;
    }

}

window.customElements.define('task-service-entity', TaskServiceEntity);

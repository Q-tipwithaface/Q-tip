from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource # used for REST API building
from datetime import datetime

from model.fooditems import food

food_api = Blueprint('food_api', __name__,
                   url_prefix='/api/foods')

# API docs https://flask-restful.readthedocs.io/en/latest/api.html
api = Api(food_api)

class foodAPI:        
    class _Create(Resource):
        def post(self):
            ''' Read data for json body '''
            body = request.get_json()
            
            ''' Avoid garbage in, error checking '''
            # validate name
            name = body.get('name')
            if name is None or len(name) < 2:
                return {'message': f'Name is missing, or is less than 2 characters'}, 210

            points = body.get('points')
            if points is None:
                return {'message': f'points are missing'}, 210

            image = body.get('image')
            if image is None:
                return {'message': f'image is missing'}, 210

            ''' #1: Key code block, setup USER OBJECT '''
            uo = food(name=name, 
                      points=points,
                      image=image)

            
            ''' #2: Key Code block to add user to database '''
            # create in database
            foodnew = uo.create()
            # success returns json
            if foodnew:
                return jsonify(foodnew.read())
            # failure returns error
            return {'message': f'Processed {name}, is a format error'}, 210

    class _Read(Resource):
        def get(self):
            foods = food.query.all()    # read/extract all users from database
            json_ready = [food.read() for food in foods]  # prepare output in json
            return jsonify(json_ready)  # jsonify creates Flask response object, more specific to APIs than json.dumps

    # building RESTapi endpoint
    api.add_resource(_Create, '/create')
    api.add_resource(_Read, '/')
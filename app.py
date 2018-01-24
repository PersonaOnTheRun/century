from flask import Flask, render_template, request, Response, redirect, url_for
app = Flask(__name__)


@app.route('/',methods = ['GET'])
def home():
    return render_template('index.html')


@app.route('/.well-known/acme-challenge/CBXExrtnDPGN25pq_QQ1M_jhBcNsiqkXhE20tpo6BgI',methods = ['GET'])
def challenge():
    return Response('CBXExrtnDPGN25pq_QQ1M_jhBcNsiqkXhE20tpo6BgI.zryhClOrau6WfUaEVTYYHJq8c9PqLf9TbjX3XUpOu8k', mimetype='text/plain')


@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html')

if __name__ == '__main__':
   app.run(debug = False, )

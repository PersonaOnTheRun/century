from flask import Flask, render_template, request, Response, redirect, url_for
app = Flask(__name__)


@app.route('/',methods = ['GET'])
def home():
    return render_template('index.html')

@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html')

if __name__ == '__main__':
   app.run(debug = True, )

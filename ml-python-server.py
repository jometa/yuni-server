from flask import Flask
app = Flask(__name__)

match_rating = [
  [0.75, 1.00, 1.00],
  [0.00, 0.25, 0.50],
  [0.75, 1.00, 1.00],
  [0.00, 0.25, 0.50],
  [0.50, 0.75, 1.00],
  [0.25, 0.50, 0.75],
  [0.50, 0.75, 1.00],
  [0.25, 0.50, 0.75]
]

@app.route('/')
def run_rank():
    return "Done"

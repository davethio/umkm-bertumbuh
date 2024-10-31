from script import DetikNewsApi
from flask import Flask, jsonify, request

app = Flask(__name__)

# Initialize the DetikNewsApi object
DN_API = DetikNewsApi()


@app.route("/search", methods=["GET"])
def search():
    # Retrieve query, detail, and limit parameters
    qs = request.args.get("q", default="", type=str)
    detail = request.args.get("detail", default="false", type=str).lower() in [
        "true",
        "1",
    ]
    limit=0
    limit = request.args.get("limit", default=None, type=int)

    if not qs:
        return (
            jsonify({"status": 400, "error": "Query parameter 'q' is required."}),
            400,
        )

    search_result=[]
    try:
        # Perform search with optional detail and limit parameters
        for i in range(1,limit//11+2):
            print("page:",i)
            res = DN_API.search(qs, page_number=i, detail=detail, limit=limit)
            for j in res:
                search_result.append(j)
            if len(search_result) >= limit:
                print("break limit")
                break
        return (
            jsonify(
                {"status": 200, "data": search_result, "length": len(search_result)}
            ),
            200,
        )
    except Exception as e:
        return jsonify({"status": 500, "error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)

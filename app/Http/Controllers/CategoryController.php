<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $categories = Category::all();
        return response()->json(['data' => $categories, 'status' => 200]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            // 'image' => 'required|image|mimes:jpeg,png,jpg'

        ]);
        $category = new Category();
        $category->name = $request->name;
        $category->description = $request->description;
        // $path = $request->file('image')->store('categoroy_imagies');
        // $category->image = $path;

        if ($category->save()) {
            return response()->json($category, 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status_code' => 500
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {

        $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);

        $category->name = $request->name;
        $category->description = $request->description;
        // $oldPath = $category->image;
        // if ($request->hasFile('image')) {
        //     $request->validate([
        //         'image' => 'image|mimes:jpeg,png,jpg'

        //     ]);
        //     $path = $request->file('image')->store('categoroy_imagies');
        //     $category->image = $path;
        //     Storage::delete($oldPath);
        // }

        if ($category->save()) {
            return response()->json($category, 200);
        } else {
            // Storage::delete($path);

            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status_code' => 500
            ], 500);
        }
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        if ($category->delete()) {
            // Storage::delete($category->image);
            return response()->json([
                'message' => 'Category deleted successfully!',
                'status_code' => 200
            ], 200);
        } else {
            return response()->json([
                'message' => 'Some Error Occurred, Please Try Again!',
                'status_code' => 500
            ], 500);
        }
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seller extends Model
{
    protected $primaryKey='s_id';
    public $timestamps=false;
    use HasFactory;
}

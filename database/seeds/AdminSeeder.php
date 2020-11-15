<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //\
        User::create([
            'first_name' => 'Admin',
            'last_name' => 'Pharmacist',
            'phone_number' => '123-456-7890',
            'address' => 'Mandeville, Manchester',
            'email' => 'admin@pharmacare.com',
            'password' => bcrypt('password'),
            'role' => 'administrator',

        ]);
    }
}

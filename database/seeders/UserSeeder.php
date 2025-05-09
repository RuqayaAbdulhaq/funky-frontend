<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'rouqayaabdulhaq@gmail.com'],
            [
                'name' => 'Rouqaya Abdulhaq',
                'password' => Hash::make('password123'),
                'email_verified_at' => now()
            ]
            );
    }
}

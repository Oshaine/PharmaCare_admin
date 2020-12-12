@component('mail::message')
# {{$prescription->order_number}}


Name: {{$prescription->user->first_name}} {{ $prescription->user->last_name}} <br>
Address: {{$prescription->user->address}} <br>
Email: {{$prescription->user->email}} <br>
Phone No: {{$prescription->user->phone_number}} <br>

Thanks for the purchase {{$prescription->user->first_name}},




Here is your receipt

<table class="table table-responsive">
    <thead>
        <tr>
            <th scope="col">Medication</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
        </tr>
    </thead>
    <tbody>
        @foreach($prescription->items as $item)
        <tr>
            <td scope="row">{{ $item->name }}</td>
            <td>{{ $item->pivot->quantity }}</td>
            <td>{{ $item->pivot->price_per_unit }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
<br><br>
Total : {{$prescription->grand_total}}<br>
Status : {{ $prescription->status }}<br>
Order Date : {{$prescription->created_at}}<br>

{{-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent --}}
<br>
Thanks,<br>
{{ config('app.name') }}
@endcomponent

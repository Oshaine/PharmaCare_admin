@component('mail::message')
# {{$order->order_number}}


Name: {{$order->user->first_name}} {{ $order->user->last_name}} <br>
Address: {{$order->user->address}} <br>
Email: {{$order->user->email}} <br>
Phone No: {{$order->user->phone_number}} <br>

Thanks for the purchase {{$order->user->first_name}},




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
        @foreach($order->items as $item)
        <tr>
            <td scope="row">{{ $item->name }}</td>
            <td>{{ $item->pivot->quantity }}</td>
            <td>{{ $item->pivot->price_per_unit }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
<br><br>
Total : {{$order->grand_total}}<br>
Status : {{ $order->status }}<br>
Order Date : {{$order->created_at}}<br>

{{-- @component('mail::button', ['url' => ''])
Button Text
@endcomponent --}}
<br>
Thanks,<br>
{{ config('app.name') }}
@endcomponent

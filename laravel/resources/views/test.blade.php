<ul>
  @foreach ( $thema as $thema_data)
    <li>{{ $thema_data->id}}</li>
    <li>{{ $thema_data->inner_word_count}}</li>
    <li>{{ $thema_data->thema}}</li>
    <li>{{ $thema_data->created_at}}</li>
  @endforeach
</ul>
